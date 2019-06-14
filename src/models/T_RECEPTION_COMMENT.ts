import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RECEPTION_COMMENT', {schema: 'dbo' } )
export class T_RECEPTION_COMMENT {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'RC_RECEPTION_N',
        })
    public RC_RECEPTION_N: number;

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'RC_COMMENT_NBR_N',
        })
    public RC_COMMENT_NBR_N: number;

    @Column('varchar', {
        nullable: true,
        length: 200,
        name: 'RC_COMMENT_C',
        })
    public RC_COMMENT_C: string | null;

}
