import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LABELREASON', {schema: 'dbo' } )
export class T_LABELREASON {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'LBR_REASON_C',
        })
    public LBR_REASON_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBR_DESCRIPNED_C',
        })
    public LBR_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBR_DESCRIPFRA_C',
        })
    public LBR_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBR_AUTOMATIC_C',
        })
    public LBR_AUTOMATIC_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBR_FLAGDELETE_C',
        })
    public LBR_FLAGDELETE_C: string | null;

}
