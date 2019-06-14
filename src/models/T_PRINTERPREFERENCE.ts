import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRINTERPREFERENCE', {schema: 'dbo' } )
export class T_PRINTERPREFERENCE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PRF_CONSOLEID_C',
        })
    public PRF_CONSOLEID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PRF_PAPERID_C',
        })
    public PRF_PAPERID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'PRF_PRINTERID_C',
        })
    public PRF_PRINTERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PRF_TRAYID_N',
        })
    public PRF_TRAYID_N: string | null;

}
