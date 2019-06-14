import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_GROUP_ACTIVITY', {schema: 'dbo' } )
export class T_GROUP_ACTIVITY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'GAC_ACTIVITY_N',
        })
    public GAC_ACTIVITY_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'GAC_LANGUAGECODE_C',
        })
    public GAC_LANGUAGECODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'GAC_DESCRIPTION_C',
        })
    public GAC_DESCRIPTION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'GAC_FLAGDELETE_C',
        })
    public GAC_FLAGDELETE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'GAC_PROSPECTSFROMBUDGET_C',
        })
    public GAC_PROSPECTSFROMBUDGET_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'GAC_DESCRIPTIONRF_C',
        })
    public GAC_DESCRIPTIONRF_C: string | null;

}
