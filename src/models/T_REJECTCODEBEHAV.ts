import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REJECTCODEBEHAV', {schema: 'dbo' } )
export class T_REJECTCODEBEHAV {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'REJ_BEHAVCODE_C',
        })
    public REJ_BEHAVCODE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'REJ_DOCTYPE_C',
        })
    public REJ_DOCTYPE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'REJ_REASONCODE_C',
        })
    public REJ_REASONCODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'REJ_DESCRIPTIONFRA_C',
        })
    public REJ_DESCRIPTIONFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'REJ_DESCRIPTIONNED_C',
        })
    public REJ_DESCRIPTIONNED_C: string | null;

}
