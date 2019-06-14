import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RAPPORT', {schema: 'dbo' } )
export class T_RAPPORT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 40,
        name: 'RAP_RAPPORTID_C',
        })
    public RAP_RAPPORTID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'RAP_PAPERID_C',
        })
    public RAP_PAPERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RAP_FLAGAUTO_C',
        })
    public RAP_FLAGAUTO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'RAP_PRINTERID_C',
        })
    public RAP_PRINTERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RAP_PRINTPF_C',
        })
    public RAP_PRINTPF_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RAP_PARMS_C',
        })
    public RAP_PARMS_C: string | null;

}
